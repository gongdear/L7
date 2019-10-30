import { storiesOf } from '@storybook/react';
import * as React from 'react';
import LineLayer from './components/Line';
import PointDemo from './components/Point';
import Point3D from './components/Point3D';
import PointImage from './components/pointImage';
import Polygon3D from './components/polygon3D';

// @ts-ignore
storiesOf('图层', module)
  .add('点图层', () => <PointDemo />)
  .add('3D点', () => <Point3D />)
  .add('图片标注', () => <PointImage />)
  .add('面3d图层', () => <Polygon3D />)
  .add('线图层', () => <LineLayer />);