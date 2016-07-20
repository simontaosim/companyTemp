/*
action 的类型
*/
export const CHANGE_PAGE_MENU_ACTIVE = "CHANGE_PAGE_MENU_ACTIVE";

export function changePageMenuActive(keys){
  //当切换页面时，改变菜单的激活状态
  return {type: CHANGE_PAGE_MENU_ACTIVE, keys};
}
