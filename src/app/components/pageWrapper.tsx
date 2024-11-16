import Header from "./Header"
export default function PageWrapper({ 
    children, 
    blur = false 
  }: { 
    children: React.ReactNode
    blur?: boolean 
  }) {
    return (
      <div className="relative">
        <Header />
        {blur && (
          <div className="fixed inset-0 backdrop-blur-md bg-black/10" />
        )}
        <div className={`relative ${blur ? 'z-10' : ''}`}>
          {children}
        </div>
      </div>
    )
  }
