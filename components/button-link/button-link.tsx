'use client'

import { Button, ButtonProps } from '@chakra-ui/react'
import NextLink from 'next/link'
import * as React from 'react'

export interface ButtonLinkProps extends ButtonProps {
  href: string
}

export const ButtonLink = React.forwardRef<HTMLAnchorElement, ButtonLinkProps>((props, ref) => {
  const { href, ...rest } = props
  return (
    <NextLink href={href} passHref legacyBehavior>
      <Button as="a" ref={ref} {...rest} />
    </NextLink>
  )
})

ButtonLink.displayName = 'ButtonLink'
