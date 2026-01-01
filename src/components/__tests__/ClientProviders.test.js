import { render, screen } from '@testing-library/react';
import ClientProviders from '../ClientProviders';

// Mock LanguageProvider since we only want to test that ClientProviders wraps it correctly
jest.mock('@/context/LanguageContext', () => ({
    LanguageProvider: ({ children, initialLanguage }) => (
        <div data-testid="language-provider" data-initial-language={initialLanguage}>
            {children}
        </div>
    ),
}));

describe('ClientProviders', () => {
    it('renders children wrapped in LanguageProvider', () => {
        render(
            <ClientProviders initialLanguage="en">
                <div data-testid="child">Test Child</div>
            </ClientProviders>
        );

        const provider = screen.getByTestId('language-provider');
        const child = screen.getByTestId('child');

        expect(provider).toBeInTheDocument();
        expect(child).toBeInTheDocument();
    });

    it('passes initialLanguage to LanguageProvider', () => {
        render(
            <ClientProviders initialLanguage="ar">
                <div>Child</div>
            </ClientProviders>
        );

        const provider = screen.getByTestId('language-provider');
        expect(provider).toHaveAttribute('data-initial-language', 'ar');
    });
});
