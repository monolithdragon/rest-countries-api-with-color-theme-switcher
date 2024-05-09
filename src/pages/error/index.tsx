import { isRouteErrorResponse, useRouteError } from 'react-router-dom';
import ThemeProvider from 'services/providers/theme';

function ErrorPage() {
  const error = useRouteError();
  let errorMessage: string;

  if (isRouteErrorResponse(error)) {
    errorMessage = `${error.status} - ${error.statusText}`;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  } else if (typeof error === 'string') {
    errorMessage = error;
  } else {
    console.error(error);
    errorMessage = 'Unknown error';
  }

  return (
    <ThemeProvider>
      <div className="flex h-screen flex-col items-center justify-center gap-8">
        <h1 className="text-4xl font-bold">Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p className="text-slate-400">
          <i>{errorMessage}</i>
        </p>
      </div>
    </ThemeProvider>
  );
}

export default ErrorPage;
