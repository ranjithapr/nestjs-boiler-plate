import { Observable } from 'rxjs'

export interface Org {
  id: string
  name: string
}

export interface OrgResult {
  data: Array<Org>
}

export interface OrgRequest {
  id: string;
}


export interface OrganizationsService {
  findByName(OrgRequest): Observable<Org>
}
