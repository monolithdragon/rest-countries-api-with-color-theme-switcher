import { renderWithRouter } from 'vitest-setup';
import { isRouteErrorResponse, useRouteError } from 'react-router-dom';
import ErrorPage from '.';

vi.mock('react-router-dom', async () => {
  const mod = await vi.importActual('react-router-dom');
  return {
    ...mod,
    useRouteError: vi.fn(),
    isRouteErrorResponse: vi.fn(),
  };
});

describe('ErrorPage', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  const useRouteErrorMock = vi.mocked(useRouteError);
  const isRouteErrorResponseMock = vi.mocked(isRouteErrorResponse);

  it('should render error message from useRouteError hook', () => {
    const error = { status: 404, statusText: 'Not Found' };
    useRouteErrorMock.mockReturnValueOnce(error);
    isRouteErrorResponseMock.mockReturnValueOnce(true);

    const { getByText } = renderWithRouter(<ErrorPage />);

    expect(getByText('Oops!')).toBeInTheDocument();
    expect(
      getByText('Sorry, an unexpected error has occurred.'),
    ).toBeInTheDocument();
    expect(
      getByText(`${error.status} - ${error.statusText}`),
    ).toBeInTheDocument();
  });

  it('should render error message from Error object', () => {
    const errorMessage = 'Custom error message';
    useRouteErrorMock.mockReturnValueOnce(new Error(errorMessage));

    const { getByText } = renderWithRouter(<ErrorPage />);

    expect(getByText('Oops!')).toBeInTheDocument();
    expect(
      getByText('Sorry, an unexpected error has occurred.'),
    ).toBeInTheDocument();
    expect(getByText(errorMessage)).toBeInTheDocument();
  });

  it('should render error message from string', () => {
    const errorMessage = 'An error occurred';
    useRouteErrorMock.mockReturnValueOnce(errorMessage);

    const { getByText } = renderWithRouter(<ErrorPage />);

    expect(getByText('Oops!')).toBeInTheDocument();
    expect(
      getByText('Sorry, an unexpected error has occurred.'),
    ).toBeInTheDocument();
    expect(getByText(errorMessage)).toBeInTheDocument();
  });

  it('should render default error message for unknown error', () => {
    useRouteErrorMock.mockReturnValueOnce(null);

    const { getByText } = renderWithRouter(<ErrorPage />);

    expect(getByText('Oops!')).toBeInTheDocument();
    expect(
      getByText('Sorry, an unexpected error has occurred.'),
    ).toBeInTheDocument();
    expect(getByText('Unknown error')).toBeInTheDocument();
  });
});
