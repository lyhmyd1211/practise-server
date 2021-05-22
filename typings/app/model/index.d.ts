// This file is created by egg-ts-helper@1.25.7
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAve from '../../../app/model/ave';
import ExportBestCoefficient from '../../../app/model/best_coefficient';
import ExportDoubleWeightedAverage from '../../../app/model/double_weighted_average';
import ExportEc_2t from '../../../app/model/ec_2t';
import ExportPolynomialFitting from '../../../app/model/polynomial_fitting';
import ExportSk from '../../../app/model/sk';

declare module 'egg' {
  interface IModel {
    Ave: ReturnType<typeof ExportAve>;
    BestCoefficient: ReturnType<typeof ExportBestCoefficient>;
    DoubleWeightedAverage: ReturnType<typeof ExportDoubleWeightedAverage>;
    Ec_2t: ReturnType<typeof ExportEc_2t>;
    PolynomialFitting: ReturnType<typeof ExportPolynomialFitting>;
    Sk: ReturnType<typeof ExportSk>;
  }
}
