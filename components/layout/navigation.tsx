import { HStack, Icon } from '@chakra-ui/react'
import { useDisclosure, useUpdateEffect } from '@chakra-ui/react'
import { useScrollSpy } from 'hooks/use-scrollspy'
import { usePathname, useRouter } from 'next/navigation'
import { FiArrowRight } from 'react-icons/fi'
import * as React from 'react' 

import { MobileNavButton } from '#components/mobile-nav'
import { MobileNavContent } from '#components/mobile-nav'
import { NavLink } from '#components/nav-link'
import siteConfig from '#data/config'


const Navigation: React.FC = () => {
  const mobileNav = useDisclosure()
  const router = useRouter()
  const path = usePathname()
  const activeId = useScrollSpy(
    siteConfig.header.links
      .filter(({ id }) => id)
      .map(({ id }) => `[id="${id}"]`),
    {
      threshold: 0.75,
    },
  )
    console.log('path: ', path)
  const mobileNavBtnRef = React.useRef<HTMLButtonElement>()

  useUpdateEffect(() => {
    mobileNavBtnRef.current?.focus()
  }, [mobileNav.isOpen])

  return (
    <HStack spacing="2" flexShrink={0}>
      {siteConfig.header.links
      .filter(
        (link) =>
          link.label !== 'Eligibility Test' ||
          path !== '/eligibility'
      )
      .map(({ id, ...props }, i) => {   //{ href, id, ...props }
        return (
          <NavLink
            //width="169px"
            //height="53px"
            fontSize='lg'
            display={['none', null, 'block']}
            href={`/#${id}`}  // {href || `/#${id}`}
            key={i}
            colorScheme='yellow'
            rounded='3xl'
            color={props.label === 'Eligibility Test' ? "#000" : "#E6E5DE"}
            isActive={
              !!(
                (id && activeId === id)    // || (href && !!path?.match(new RegExp(href)))
              )
            }
            rightIcon={props.label === 'Eligibility Test' ? <Icon as={FiArrowRight} /> : undefined}
            {...props}
          >
            {props.label}
          </NavLink>
        )
      })}

      {/* <ThemeToggle /> */}

      <MobileNavButton
        ref={mobileNavBtnRef}
        aria-label="Open Menu"
        onClick={mobileNav.onOpen}
      />

      <MobileNavContent isOpen={mobileNav.isOpen} onClose={mobileNav.onClose} />
    </HStack>
  )
}

export default Navigation
