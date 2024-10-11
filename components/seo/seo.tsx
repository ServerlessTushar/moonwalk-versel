import { NextSeo, NextSeoProps } from 'next-seo'

import React from 'react'

export interface SeoProps extends NextSeoProps {
  title: string
  description: string
}

export const Seo = ({ title, description, ...props }: SeoProps) => {
  return <NextSeo title={title} description={description} {...props} />
}
