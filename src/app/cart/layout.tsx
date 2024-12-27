export function generateMetadata() {
    return {
      title: 'Cart Page',
      description: 'View the items you have added to your cart before proceeding to checkout.',
      openGraph: {
        title: 'Cart Page',
        description: 'View the items you have added to your cart before proceeding to checkout.',
      },
    };
  }
  
  export default function CartLayout({ children }: { children: React.ReactNode }) {
    return (
      <div>
        {/* <header>Cart Header</header> */}
        {children}
        {/* <footer>Cart Footer</footer> */}
      </div>
    );
  }
  