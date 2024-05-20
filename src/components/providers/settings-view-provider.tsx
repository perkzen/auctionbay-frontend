'use client';
import React, {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import ProfileSettingsForm from '@/components/composites/navbar/profile-settings/profile-settings-form';
import ChangePasswordForm from '@/components/composites/navbar/profile-settings/change-password-form';
import ChangeProfilePictureForm from '@/components/composites/navbar/profile-settings/change-profile-picture-form';

export enum SettingsType {
  PROFILE_SETTINGS = 'PROFILE_SETTINGS',
  CHANGE_PASSWORD = 'CHANGE_PASSWORD',
  CHANGE_PROFILE_PICTURE = 'CHANGE_PROFILE_PICTURE',
}

type ModalSettingsContextType = {
  settingsComponent: FC;
  settingsType: SettingsType;
  setSettingsType: (view: SettingsType) => void;
};

const ModalSettingsContext = createContext<ModalSettingsContextType>({
  settingsType: SettingsType.PROFILE_SETTINGS,
  setSettingsType: () => {},
  settingsComponent: ProfileSettingsForm,
});

const Component: Record<SettingsType, FC> = {
  [SettingsType.PROFILE_SETTINGS]: ProfileSettingsForm,
  [SettingsType.CHANGE_PASSWORD]: ChangePasswordForm,
  [SettingsType.CHANGE_PROFILE_PICTURE]: ChangeProfilePictureForm,
};
export const SettingsViewProvider = ({ children }: PropsWithChildren) => {
  const [view, setView] = useState<SettingsType>(SettingsType.PROFILE_SETTINGS);

  useEffect(() => {
    return () => {
      setView(SettingsType.PROFILE_SETTINGS);
    };
  }, []);

  const value: ModalSettingsContextType = useMemo(
    () => ({
      settingsComponent: Component[view],
      settingsType: view,
      setSettingsType: setView,
    }),
    [view]
  );

  return (
    <ModalSettingsContext.Provider value={value}>
      {children}
    </ModalSettingsContext.Provider>
  );
};

export const useSettingsView = () => {
  return useContext(ModalSettingsContext);
};
