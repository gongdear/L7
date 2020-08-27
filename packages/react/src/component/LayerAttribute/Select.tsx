import { IActiveOption, ILayer } from '@cgcs2000/l7';
import * as React from 'react';

const { useEffect } = React;
interface ILayerProps {
  layer: ILayer;
  select: {
    option: IActiveOption | boolean;
  };
}
export default React.memo(function Chart(props: ILayerProps) {
  const { layer, select } = props;
  useEffect(() => {
    layer.select(select.option);
  }, [JSON.stringify(select)]);
  return null;
});
