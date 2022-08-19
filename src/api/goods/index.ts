import axios from '../index'

import { Response, ResParams } from './type'

export const getList = axios<Response, ResParams>('url')
