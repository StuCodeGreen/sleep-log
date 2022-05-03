import { useEffect, useState } from 'react';

export default function ClientOnly({children, ...delegated}){
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(()=> {
    setHasMounted(true);
  },[])

  if(!setHasMounted){
    return  null;
  }

  return <div {...delegated}>{children}</div>
}