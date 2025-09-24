import { useTheme } from '../hooks/useTheme';
import { HiSun, HiMoon } from 'react-icons/hi';
import { Button } from '@heroui/button';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      isIconOnly
      variant="flat"
      onPress={toggleTheme}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? (
        <HiMoon className="w-5 h-5" />
      ) : (
        <HiSun className="w-5 h-5" />
      )}
    </Button>
  );
}