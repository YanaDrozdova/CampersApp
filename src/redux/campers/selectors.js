export const selectCampers = state => state.campers.items;

export const selectPage = state => state.campers.page;

export const selectCamperInfo = state => state.campers.camperInfo;

export const selectTotalCamperCount = state => state.campers.totalCount;

export const selectIsLoadingCampers = state => state.campers.isLoadingCampers;

export const selectIsLoadingCamperInfo = state =>
  state.campers.isLoadingCamperInfo;

export const selectError = state => state.campers.error;
