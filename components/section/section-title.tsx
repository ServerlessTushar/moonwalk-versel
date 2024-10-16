import {
  VStack,
  Heading,
  Box,
  StackProps,
  useMultiStyleConfig,
} from '@chakra-ui/react'

export interface SectionTitleProps extends Omit<StackProps, 'title'> {
  title: React.ReactNode
  description?: React.ReactNode
  align?: 'left' | 'center'
  variant?: string
}

export const SectionTitle: React.FC<SectionTitleProps> = (props) => {
  const { title, description, align, variant, ...rest } = props
  const styles = useMultiStyleConfig('SectionTitle', { variant })

  return (
    <VStack
      sx={styles.wrapper}
      alignItems={align === 'left' ? 'flex-start' : 'center'}
      spacing={4}
      {...rest}
    >
      <Heading 
        //sx={styles.title} 
        as="h2" 
        fontSize={{ base: '30px', md: "70px" }} 
        textAlign='center'
        fontFamily='GratelosDisplay' 
        fontWeight={400}
        letterSpacing="wider"
        width={{base: "90%", md: "75%"}}
        textTransform="uppercase"
      >
        {title}
      </Heading>
      {description && (
        <Box sx={styles.description} textAlign={align}>
          {description}
        </Box>
      )}
    </VStack>
  )
}
