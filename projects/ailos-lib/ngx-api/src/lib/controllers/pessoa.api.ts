import { IPaginableAPIModel } from '../domain/paginable.interface';
import { Injectable, Injector } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPessoa } from '../models/pessoa';
import { AbstractAPI } from '../domain/api.abstract';

@Injectable({
  providedIn: 'root'
})
export class PessoaAPI extends AbstractAPI<IPessoa> {

  protected url = 'http://localhost:3000/pessoas';

  /**
   * CONSTRUCTOR
   * @param injector: Injector
   */
  constructor(injector: Injector) {
    super(injector);
  }

  get(params?: HttpParams): Observable<IPessoa> {
    return super.getGeneric<IPessoa>(params);
  }

  getAll(params?: HttpParams): Observable<IPaginableAPIModel<IPessoa>> {
    return super.getListGeneric<IPessoa>(params);
  }

  create(entity: IPessoa, params?: HttpParams): Observable<IPessoa> {
    return super.postGeneric(entity, params);
  }

  update(entity: IPessoa, params?: HttpParams): Observable<IPessoa> {
    return super.putGeneric(entity, params);
  }

  delete(params?: HttpParams): Observable<void> {
    return super.deleteGeneric(params);
  }

}
