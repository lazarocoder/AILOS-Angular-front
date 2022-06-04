import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { validate } from 'gerador-validador-cpf';
import Swal from 'sweetalert2';
import { QueryStore } from './query.store';
import { IPessoa } from '@ailos-lib/ngx-api';
import { NgxBreadcrumbService } from '@ailos-lib/ngx-component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class QueryComponent implements OnInit {

  public contentLoaded = false;
  public searchPeople = false;
  public cpfInputMask = '000.000.000-00';
  public cpfPlaceholder = '___.___.___-__';
  public form!: FormGroup;
  public pessoa$: Observable<IPessoa> = this._store.pessoa$;

  /**
   * CONSTRUCTOR OF PARAM
   * @param _formBuilder: FormBuilder
   * @param _store: QueryStore
   * @param _breadcrumbService: NgxBreadcrumbService
   * @param _router: Router
   */
  constructor(
    private _formBuilder: FormBuilder,
    private _store: QueryStore,
    private _breadcrumbService: NgxBreadcrumbService
  ) { }

  ngOnInit(): void {
    setTimeout(() => { this.contentLoaded = true; }, 1500);

    this.form = this._formBuilder.group({
      cpf: new FormControl('', [
        Validators.required,
        Validators.minLength(11),
        Validators.maxLength(14),
        Validators.pattern('^\d{3}\.\d{3}\.\d{3}-\d{2}$')
      ])
    });

    this._breadcrumbService.add('query-breadcrumb', 'Consulta', '/query', 1);
  }

  /**
   * Reset query component
   */
  reset(): void {
    this.form.reset();
    this._store.reset();
  }

  /**
   * Submit
   */
  submit(): void {
    const cpf: string = this.form.get('cpf')?.value;
    if (validate(cpf)) {
      this._store.search(cpf);
      this.checkResultSearch();
    } else {
      Swal.fire(
        'CPF Inválido!',
        `O CPF informado está incorreto.`,
        'error'
      );
    }
  }

  /**
   * Método responsável pela verificação do CPF, se o mesmo existe nos registros
   */
  private checkResultSearch(): void {
    let error = false;
    this._store.notify$.subscribe(() => {
      Swal.fire(
        'CPF Não encontrado!',
        `O CPF informado não foi identificado nos registros.`,
        'warning'
      );
      this.searchPeople = false;
      error = true;
    });

    this.pessoa$.subscribe(() => {
      if (!error) {
        this.searchPeople = true;
      }
    });
  }

}
