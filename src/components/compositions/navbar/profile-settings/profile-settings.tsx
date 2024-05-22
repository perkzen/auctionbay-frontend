import { useSettingsView } from '@/components/providers/settings-view-provider';

const ProfileSettings = () => {
  const { settingsComponent: Settings } = useSettingsView();

  return <Settings />;
};

export default ProfileSettings;
