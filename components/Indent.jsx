import { Box } from '@radix-ui/themes'

export default function Indent({ children, style, ...props }) {
    return (
        <Box style={{ marginLeft: '2rem', ...style }} {...props}>
            {children}
        </Box>
    )
}
