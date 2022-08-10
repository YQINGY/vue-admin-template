/*
 * @Autor: yqy
 * @Date: 2022-07-23 16:24:07
 * @LastEditTime: 2022-08-06 12:23:58
 */
import { post, get } from '@/utils/request'

export const test = params => get('/api/test', params);
