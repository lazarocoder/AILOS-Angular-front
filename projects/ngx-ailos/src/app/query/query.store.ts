import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { ReplaySubject, Subject } from 'rxjs';
import { PessoaAPI, IPessoa } from '@ailos-lib/ngx-api';

@Injectable({
  providedIn: 'root'
})
export class QueryStore {

  private notify = new Subject<any>();
  readonly notify$ = this.notify.asObservable();

  private pessoa = new ReplaySubject<IPessoa>(1);
  readonly pessoa$ = this.pessoa.asObservable();

  /**
   * CONSTRUCTOR
   * @param pessoaAPI: PessoaAPI
   */
  constructor(
    private pessoaAPI: PessoaAPI
  ) {}

  /**
   * Método responsável por chamar o serviço de pessoa e informar o parâmetro de busca
   * @param searchTerm: string
   */
  search(searchTerm: string): void {
    const params = new HttpParams()
      .set('cpf', searchTerm)
      .set('singular', '1');

    this.pessoaAPI.get(params).subscribe(
      (pessoa: IPessoa) => this.pessoa.next(pessoa),
      (error: Error) => this.notify.next(error)
    );
  }

  /**
   * Reset query store
   */
  reset(): void {
    this.pessoa.next(undefined);
    this.pessoa.complete();
  }
}
