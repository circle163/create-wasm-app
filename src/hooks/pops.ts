import React, { useContext } from 'react';

interface PopRequirement {
  requiresUserInfo?: boolean;
  requiresUserPhone?: boolean;
  setUserInfoResolved: () => void;
  setUserPhoneResolved: () => void;
}

const PopRequirementContext = React.createContext<PopRequirement>({
  setUserInfoResolved() {},
  setUserPhoneResolved() {},
});
export const PopRequirementProvider = PopRequirementContext.Provider;

export function usePopRequirement() {
  return useContext(PopRequirementContext);
}
