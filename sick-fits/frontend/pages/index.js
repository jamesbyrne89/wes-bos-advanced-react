import React from 'react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div>
      This is the homepage!
      <Link href="/sell">
        <a>Sell stuff</a>
      </Link>
    </div>
  );
}
