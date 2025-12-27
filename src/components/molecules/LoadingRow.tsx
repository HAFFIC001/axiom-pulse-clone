import { Skeleton } from "../atoms/Skeleton"

export function LoadingRow() {
  return (
    <tr>
    <td className="px-4 py-[12px]"><Skeleton className="h-4 w-16" /></td>
    <td className="px-4 py-[12px]"><Skeleton className="h-4 w-20" /></td>
    <td className="px-4 py-[12px]"><Skeleton className="h-4 w-12" /></td>
    <td className="px-4 py-[12px]"><Skeleton className="h-4 w-24" /></td>
    <td className="px-4 py-[12px] hide-mobile"><Skeleton className="h-4 w-24" /></td>
    <td className="px-4 py-[12px] text-right"><Skeleton className="h-4 w-10 ml-auto" /></td>
  </tr>
  
  )
}
