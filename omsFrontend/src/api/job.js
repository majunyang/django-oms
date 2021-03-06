import request from '@/utils/request'
import apiURL from '@/config'

// jobs
export function postJob(data) {
  return request({
    url: apiURL.jobs,
    method: 'post',
    data
  })
}

export function getJob(query, id) {
  return request({
    url: id ? apiURL.jobs + id + '/' : apiURL.jobs,
    method: 'get',
    params: query
  })
}

export function putJob(id, data) {
  return request({
    url: apiURL.jobs + id + '/',
    method: 'put',
    data
  })
}

export function patchJob(id, data) {
  return request({
    url: apiURL.jobs + id + '/',
    method: 'patch',
    data
  })
}

export function deleteJob(id) {
  return request({
    url: apiURL.jobs + id + '/',
    method: 'delete'
  })
}

// deployenvs
export function postDeployenv(data) {
  return request({
    url: apiURL.deployenvs,
    method: 'post',
    data
  })
}

export function getDeployenv(query) {
  return request({
    url: apiURL.deployenvs,
    method: 'get',
    params: query
  })
}

export function putDeployenv(id, data) {
  return request({
    url: apiURL.deployenvs + id + '/',
    method: 'put',
    data
  })
}

export function deleteDeployenv(id) {
  return request({
    url: apiURL.deployenvs + id + '/',
    method: 'delete'
  })
}

// deployjobs
export function postDeployJob(data) {
  return request({
    url: apiURL.deployjobs,
    method: 'post',
    data
  })
}

export function getDeployJob(query) {
  return request({
    url: apiURL.deployjobs,
    method: 'get',
    params: query
  })
}

export function deleteDeployJob(id) {
  return request({
    url: apiURL.deployjobs + id + '/',
    method: 'delete'
  })
}

// deployresults
export function getDeployResult(query) {
  return request({
    url: apiURL.deployresults,
    method: 'get',
    params: query
  })
}

// updaejobsstatus
export function getUpdateJobsStatus(query) {
  return request({
    url: apiURL.updaejobsstatus,
    method: 'get',
    params: query
  })
}

// deploycmds
export function postDeploycmd(data) {
  return request({
    url: apiURL.deploycmds,
    method: 'post',
    data
  })
}

export function getDeploycmd(query) {
  return request({
    url: apiURL.deploycmds,
    method: 'get',
    params: query
  })
}

export function putDeploycmd(id, data) {
  return request({
    url: apiURL.deploycmds + id + '/',
    method: 'put',
    data
  })
}

export function deleteDeploycmd(id) {
  return request({
    url: apiURL.deploycmds + id + '/',
    method: 'delete'
  })
}

// deploytickets
export function postDeployTicket(data) {
  return request({
    url: apiURL.deploytickets,
    method: 'post',
    data
  })
}

export function getDeployTicket(query, id) {
  return request({
    url: id ? apiURL.deploytickets + id + '/' : apiURL.deploytickets,
    method: 'get',
    params: query
  })
}

export function putDeployTicket(id, data) {
  return request({
    url: apiURL.deploytickets + id + '/',
    method: 'put',
    data
  })
}

export function patchDeployTicket(id, data) {
  return request({
    url: apiURL.deploytickets + id + '/',
    method: 'patch',
    data
  })
}

// deployticketenclosures
export function postDeployTicketEnclosur(data) {
  return request({
    url: apiURL.deployticketenclosures,
    method: 'post',
    data
  })
}

export function getDeployTicketEnclosur(query) {
  return request({
    url: apiURL.deployticketenclosures,
    method: 'get',
    params: query
  })
}

export function deleteDeployTicketEnclosur(id) {
  return request({
    url: apiURL.deployticketenclosures + id + '/',
    method: 'delete'
  })
}

// sqltickets
export function postSqlTicket(data) {
  return request({
    url: apiURL.sqltickets,
    method: 'post',
    data
  })
}

export function getSqlTicket(query, id) {
  return request({
    url: id ? apiURL.sqltickets + id + '/' : apiURL.sqltickets,
    method: 'get',
    params: query
  })
}

export function putSqlTicket(id, data) {
  return request({
    url: apiURL.sqltickets + id + '/',
    method: 'put',
    data
  })
}

export function patchSqlTicket(id, data) {
  return request({
    url: apiURL.sqltickets + id + '/',
    method: 'patch',
    data
  })
}
