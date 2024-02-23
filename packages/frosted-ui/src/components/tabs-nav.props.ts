import { asChildProp } from '../helpers';

const tabsNavLinkPropDefs = {
  asChild: asChildProp,
} satisfies {
  asChild: typeof asChildProp;
};

export { baseTabsListPropDefs as tabsNavPropDefs } from './base-tabs-list.props';
export { tabsNavLinkPropDefs };
