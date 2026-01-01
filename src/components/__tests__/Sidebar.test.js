import { render, screen, fireEvent } from '@testing-library/react';
import Sidebar from '../Sidebar';
import { useLanguage } from '@/context/LanguageContext';
import { usePathname } from 'next/navigation';

// Mock dependencies
jest.mock('@/context/LanguageContext');
jest.mock('next/navigation', () => ({
    usePathname: jest.fn(),
}));
jest.mock('next/link', () => {
    return ({ children, href, className }) => {
        return (
            <a href={href} className={className}>
                {children}
            </a>
        );
    };
});
jest.mock('next/image', () => {
    return ({ src, alt, width, height, className }) => {
        // eslint-disable-next-line @next/next/no-img-element
        return <img src={src} alt={alt} width={width} height={height} className={className} />;
    };
});

describe('Sidebar', () => {
    const mockToggleLanguage = jest.fn();

    beforeEach(() => {
        // Default mocks
        useLanguage.mockReturnValue({
            language: 'en',
            toggleLanguage: mockToggleLanguage,
        });
        usePathname.mockReturnValue('/');
        mockToggleLanguage.mockClear();
    });

    it('renders correctly in English', () => {
        render(<Sidebar />);

        expect(screen.getByText('English Department')).toBeInTheDocument();
        expect(screen.getByText('Home')).toBeInTheDocument();
        expect(screen.getByText('Weekly Reports')).toBeInTheDocument();
    });

    it('renders correctly in Arabic', () => {
        useLanguage.mockReturnValue({
            language: 'ar',
            toggleLanguage: mockToggleLanguage,
        });
        render(<Sidebar />);

        expect(screen.getByText('قسم اللغة الإنجليزية')).toBeInTheDocument();
        expect(screen.getByText('الرئيسية')).toBeInTheDocument();
    });

    it('highlights the active link', () => {
        usePathname.mockReturnValue('/reports');
        render(<Sidebar />);

        // In our mock, Link renders an <a> tag. We check if it has the 'active' class.
        // We search for the link that contains "Weekly Reports"
        const reportLink = screen.getByText('Weekly Reports').closest('a');
        expect(reportLink).toHaveClass('active');

        const homeLink = screen.getByText('Home').closest('a');
        expect(homeLink).not.toHaveClass('active');
    });

    it('toggles language when buttons are clicked', () => {
        render(<Sidebar />);

        const arabicBtn = screen.getByText('عربي');
        fireEvent.click(arabicBtn);

        expect(mockToggleLanguage).toHaveBeenCalledWith('ar');
    });
});
