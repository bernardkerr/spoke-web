import Link from 'next/link'

export function Footer() {
  return (
    <footer style={{
      backgroundColor: 'var(--theme-colors-neutral-neutral-2)',
      padding: '60px 0 40px',
      marginTop: '80px'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 24px'
      }}>
        {/* Five Column Layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          gap: '40px',
          marginBottom: '60px'
        }}>
          {/* Product Column */}
          <div>
            <h3 style={{
              fontSize: '14px',
              fontWeight: 400,
              color: 'var(--theme-colors-neutral-neutral-9)',
              marginBottom: '16px',
              letterSpacing: '0.5px'
            }}>
              Product
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: '12px' }}>
                <Link href="/features" style={{ color: 'var(--theme-colors-neutral-neutral-12)', textDecoration: 'none', fontSize: '14px' }}>
                  Features
                </Link>
              </li>
              <li style={{ marginBottom: '12px' }}>
                <Link href="/enterprise" style={{ color: 'var(--theme-colors-neutral-neutral-12)', textDecoration: 'none', fontSize: '14px' }}>
                  Enterprise
                </Link>
              </li>
              <li style={{ marginBottom: '12px' }}>
                <Link href="/pricing" style={{ color: 'var(--theme-colors-neutral-neutral-12)', textDecoration: 'none', fontSize: '14px' }}>
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 style={{
              fontSize: '14px',
              fontWeight: 400,
              color: 'var(--theme-colors-neutral-neutral-9)',
              marginBottom: '16px',
              letterSpacing: '0.5px'
            }}>
              Resources
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: '12px' }}>
                <Link href="/docs" style={{ color: 'var(--theme-colors-neutral-neutral-12)', textDecoration: 'none', fontSize: '14px' }}>
                  Docs
                </Link>
              </li>
              <li style={{ marginBottom: '12px' }}>
                <Link href="/forum" style={{ color: 'var(--theme-colors-neutral-neutral-12)', textDecoration: 'none', fontSize: '14px' }}>
                  Forum
                </Link>
              </li>
              <li style={{ marginBottom: '12px' }}>
                <Link href="/status" style={{ color: 'var(--theme-colors-neutral-neutral-12)', textDecoration: 'none', fontSize: '14px' }}>
                  Status
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 style={{
              fontSize: '14px',
              fontWeight: 400,
              color: 'var(--theme-colors-neutral-neutral-9)',
              marginBottom: '16px',
              letterSpacing: '0.5px'
            }}>
              Company
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: '12px' }}>
                <Link href="/careers" style={{ color: 'var(--theme-colors-neutral-neutral-12)', textDecoration: 'none', fontSize: '14px' }}>
                  Careers
                </Link>
              </li>
              <li style={{ marginBottom: '12px' }}>
                <Link href="/blog" style={{ color: 'var(--theme-colors-neutral-neutral-12)', textDecoration: 'none', fontSize: '14px' }}>
                  Blog
                </Link>
              </li>
              <li style={{ marginBottom: '12px' }}>
                <Link href="/community" style={{ color: 'var(--theme-colors-neutral-neutral-12)', textDecoration: 'none', fontSize: '14px' }}>
                  Community
                </Link>
              </li>
              <li style={{ marginBottom: '12px' }}>
                <Link href="/students" style={{ color: 'var(--theme-colors-neutral-neutral-12)', textDecoration: 'none', fontSize: '14px' }}>
                  Students
                </Link>
              </li>
              <li style={{ marginBottom: '12px' }}>
                <Link href="/brand" style={{ color: 'var(--theme-colors-neutral-neutral-12)', textDecoration: 'none', fontSize: '14px' }}>
                  Brand
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h3 style={{
              fontSize: '14px',
              fontWeight: 400,
              color: 'var(--theme-colors-neutral-neutral-9)',
              marginBottom: '16px',
              letterSpacing: '0.5px'
            }}>
              Legal
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: '12px' }}>
                <Link href="/terms" style={{ color: 'var(--theme-colors-neutral-neutral-12)', textDecoration: 'none', fontSize: '14px' }}>
                  Terms of Service
                </Link>
              </li>
              <li style={{ marginBottom: '12px' }}>
                <Link href="/privacy" style={{ color: 'var(--theme-colors-neutral-neutral-12)', textDecoration: 'none', fontSize: '14px' }}>
                  Privacy Policy
                </Link>
              </li>
              <li style={{ marginBottom: '12px' }}>
                <Link href="/data-use" style={{ color: 'var(--theme-colors-neutral-neutral-12)', textDecoration: 'none', fontSize: '14px' }}>
                  Data Use
                </Link>
              </li>
              <li style={{ marginBottom: '12px' }}>
                <Link href="/security" style={{ color: 'var(--theme-colors-neutral-neutral-12)', textDecoration: 'none', fontSize: '14px' }}>
                  Security
                </Link>
              </li>
              <li style={{ marginBottom: '12px' }}>
                <Link href="/connect" style={{ color: 'var(--theme-colors-neutral-neutral-12)', textDecoration: 'none', fontSize: '14px' }}>
                  Connect
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect Column */}
          <div>
            <h3 style={{
              fontSize: '14px',
              fontWeight: 400,
              color: 'var(--theme-colors-neutral-neutral-9)',
              marginBottom: '16px',
              letterSpacing: '0.5px'
            }}>
              Connect
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: '12px' }}>
                <Link href="https://x.com/spoke-robotics" target="_blank" rel="noreferrer" style={{ color: 'var(--theme-colors-neutral-neutral-12)', textDecoration: 'none', fontSize: '14px' }}>
                  X
                </Link>
              </li>
              <li style={{ marginBottom: '12px' }}>
                <Link href="https://linkedin.com/company/spoke-robotics" target="_blank" rel="noreferrer" style={{ color: 'var(--theme-colors-neutral-neutral-12)', textDecoration: 'none', fontSize: '14px' }}>
                  LinkedIn
                </Link>
              </li>
              <li style={{ marginBottom: '12px' }}>
                <Link href="https://youtube.com/@spoke-robotics" target="_blank" rel="noreferrer" style={{ color: 'var(--theme-colors-neutral-neutral-12)', textDecoration: 'none', fontSize: '14px' }}>
                  YouTube
                </Link>
              </li>
              <li style={{ marginBottom: '12px' }}>
                <Link href="https://github.com/spoke-robotics" target="_blank" rel="noreferrer" style={{ color: 'var(--theme-colors-neutral-neutral-12)', textDecoration: 'none', fontSize: '14px' }}>
                  GitHub
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div style={{
          paddingTop: '24px'
        }}>
          <p style={{
            margin: 0,
            color: 'var(--theme-colors-neutral-neutral-9)',
            fontSize: '12px',
            textAlign: 'left'
          }}>
            © 2025, SPOKE Robotics. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
