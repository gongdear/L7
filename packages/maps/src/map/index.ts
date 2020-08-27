import { Map } from '@cgcs2000/l7-map';
import BaseMapWrapper from '../BaseMapWrapper';
import MapboxService from './map';
export default class MapboxWrapper extends BaseMapWrapper<Map> {
  protected getServiceConstructor() {
    return MapboxService;
  }
}
