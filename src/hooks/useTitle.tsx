import { useEffect } from 'preact/hooks';

export function useTitle(title: string) {
  if (title.length === 0) {
    throw new Error('Page title must not be empty');
  }

  useEffect(() => {
    const prevTitle = document.title;
    document.title = `${title}`;
    return () => {
      document.title = prevTitle;
    };
  }, [title]);
}
