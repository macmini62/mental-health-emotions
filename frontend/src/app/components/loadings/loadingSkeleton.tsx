import { Stack, Skeleton } from "@mui/material";

const LoadingSkeleton = () => {
  return (
    <Stack spacing={2}>
      {/* For variant="text", adjust the height via font-size */}
      <Skeleton variant="rounded" width={350} height={280} />
      <div className="flex gap-4">
        {/* For other variants, adjust the size with `width` and `height` */}
        <Skeleton variant="circular" width={48} height={48} />
        <div className="w-3/4">
          <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
          <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
          <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
        </div>
      </div>
    </Stack>
  )
}

export default LoadingSkeleton;
