import { IAnimateOption, ILayer } from '@cgcs2000/l7';
import * as React from 'react';
import { IStyleOptions } from './';

const { useEffect } = React;
interface ILayerProps {
  layer: ILayer;
  animate: Partial<IAnimateOption>;
}
export default React.memo(function Chart(props: ILayerProps) {
  const { layer, animate } = props;
  useEffect(() => {
    layer.animate(animate);
  }, [JSON.stringify(animate)]);
  return null;
});
