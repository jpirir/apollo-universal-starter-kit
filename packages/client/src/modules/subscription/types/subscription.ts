import { QueryProps } from 'react-apollo';
import { Errors } from '../../../../../common/types';
import { UpdateCardFn, CardOptions } from './card';

/* --- ENTITIES --- */
// tslint:disable-next-line:no-empty-interface
interface SubscriptionOptions extends CardOptions {}

/* ---  TYPES --- */
type Cancel = () => Promise<boolean | Errors>;

/* --- COMPONENT PROPS --- */

/**
 * Mutation props
 */
interface SubscriptionOperation {
  subscribe?: UpdateCardFn;
  cancel?: Cancel;
}

/**
 * Query props
 */
interface SubscribersOnlyProps extends QueryProps {
  number?: number;
}

interface CancelSubscriptionProps extends QueryProps, SubscriptionOperation {
  active?: boolean;
}

interface SubscriptionNavigationProps extends CancelSubscriptionProps {
  children?: any;
  component?: any;
}

interface SubscriptionsOnlyResult {
  subscribersOnlyNumber: SubscribersOnlyProps;
}

interface SubscriptionQueryResult {
  subscription: CancelSubscriptionProps;
}

// tslint:disable-next-line:no-empty-interface
interface SubscriptionProps extends SubscriptionOperation {}

export { SubscriptionsOnlyResult, SubscriptionOperation, SubscribersOnlyProps };
export { SubscriptionQueryResult, CancelSubscriptionProps };
export { SubscriptionNavigationProps, SubscriptionProps };