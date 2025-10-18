import React from "react";
import styled from "styled-components";
import { theme } from "styles/theme";
import { Instagram, Youtube } from "lucide-react";

// 타입 정의
export type PolicyLink = {
  label: string;
  href: string;
};

export type SocialLink = {
  type: "instagram" | "youtube";
  href: string;
  ariaLabel: string;
};

export type FooterProps = {
  policyLinks: PolicyLink[];
  socialLinks: SocialLink[];
};

// 소셜 아이콘 컴포넌트
const SocialIcon: React.FC<{
  type: "instagram" | "youtube";
  ariaLabel: string;
}> = ({ type, ariaLabel }) => {
  const IconComponent = type === "instagram" ? Instagram : Youtube;
  return <IconComponent size={20} aria-label={ariaLabel} />;
};

// Footer 컴포넌트
const Footer: React.FC<FooterProps> = ({ policyLinks, socialLinks }) => {
  return (
    <FooterContainer>
      <FooterContent>
        {/* 정책/약관 링크 섹션 */}
        <PolicySection>
          <PolicyLinks>
            {policyLinks.map((link, index) => (
              <React.Fragment key={link.href}>
                <PolicyLink href={link.href} aria-label={link.label}>
                  {link.label}
                </PolicyLink>
                {index < policyLinks.length - 1 && (
                  <PolicySeparator>·</PolicySeparator>
                )}
              </React.Fragment>
            ))}
          </PolicyLinks>
        </PolicySection>

        {/* 소셜 링크 섹션 */}
        <SocialSection>
          <SocialLinks>
            {socialLinks.map((link) => (
              <SocialLink
                key={link.type}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.ariaLabel}
              >
                <SocialIcon type={link.type} ariaLabel={link.ariaLabel} />
              </SocialLink>
            ))}
          </SocialLinks>
        </SocialSection>
      </FooterContent>
    </FooterContainer>
  );
};

// 스타일드 컴포넌트
const FooterContainer = styled.footer`
  width: 100%;
  background: linear-gradient(
    135deg,
    ${theme.colors.background.secondary} 0%,
    ${theme.colors.background.tertiary} 100%
  );
  border-top: 1px solid ${theme.colors.border.secondary};
  padding: ${theme.spacing.lg} ${theme.spacing.md};
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent 0%,
      ${theme.colors.border.primary} 50%,
      transparent 100%
    );
  }

  @media (min-width: 1024px) {
    padding: ${theme.spacing.xl} ${theme.spacing.xl};
  }
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;

  @media (min-width: ${theme.breakpoints.desktop}) {
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing.xl};
    padding: ${theme.spacing.xl} 0;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing.lg};
  }
`;

const PolicySection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PolicyLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: ${theme.spacing.md} 0;
  gap: ${theme.spacing.xs};
  padding: ${theme.spacing.lg} ${theme.spacing.xl};
`;

const PolicyLink = styled.a`
  color: ${theme.colors.text.secondary};
  text-decoration: none;
  font-size: ${theme.fontSize.sm};
  font-weight: ${theme.fontWeight.medium};
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  border-radius: ${theme.borderRadius.md};
  transition: all ${theme.transition.normal};
  position: relative;

  &:hover {
    color: ${theme.colors.text.primary};
    background-color: rgba(124, 212, 204, 0.1);
    transform: translateY(-1px);
  }

  &:focus {
    outline: 2px solid ${theme.colors.border.focus};
    outline-offset: 2px;
    border-radius: ${theme.borderRadius.sm};
  }
`;

const PolicySeparator = styled.span`
  color: ${theme.colors.text.tertiary};
  font-size: ${theme.fontSize.sm};

  @media (max-width: ${theme.breakpoints.desktop}) {
    display: none;
  }
`;

const SocialSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: ${theme.spacing.lg};
  padding: ${theme.spacing.md} ${theme.spacing.lg};
  border-radius: ${theme.borderRadius.lg};
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;

  border-radius: ${theme.borderRadius.lg};
  color: ${theme.colors.text.secondary};
  transition: all ${theme.transition.normal};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

  &:hover {
    border-color: ${theme.colors.brand.primary};
    background: linear-gradient(
      135deg,
      ${theme.colors.brand.primary}20 0%,
      ${theme.colors.brand.primary}10 100%
    );
    color: ${theme.colors.text.primary};
    transform: translateY(-3px) scale(1.05);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  &:focus {
    outline: 2px solid ${theme.colors.border.focus};
    outline-offset: 2px;
  }
`;

export default Footer;
