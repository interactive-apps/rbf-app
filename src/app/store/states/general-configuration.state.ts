import { BaseState, initialBaseState } from './base.state';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { GeneralConfiguration } from 'src/app/pages/configuration/models/general-configuration.model';

export interface GeneralConfigurationState
  extends BaseState,
    EntityState<GeneralConfiguration> {
  updating: boolean;
  updated: boolean;
  deleting: boolean;
  deleted: boolean;
  adding: boolean;
  added: boolean;
}

export function selectConfigId(config: GeneralConfiguration): string {
  return config.id;
}

export const adapter: EntityAdapter<GeneralConfiguration> = createEntityAdapter(
  {
    sortComparer: false,
    selectId: selectConfigId
  }
);

export const {
  selectIds: seletcGeneralIds,
  selectEntities: selectGeneralConfigEntities,
  selectAll: selectAllGeneralConfigurations,
  selectTotal: selectGeneralConfigCount
} = adapter.getSelectors();

export const initialGeneralConfigurationState: GeneralConfigurationState = adapter.getInitialState(
  {
    ...initialBaseState,
    updating: false,
    updated: false,
    deleting: false,
    deleted: false,
    added: false,
    adding: false
  }
);
