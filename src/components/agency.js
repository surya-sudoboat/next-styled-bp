/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */

import React from 'react'

import { CategoryContent, Titlecontent } from './creatorCategories.module'

import {
  AgencyBody,
  AgencyContainer,
  AllPortionWrapper,
  AgencyButtonHolder,
  TitleContainer,
} from './agency.module'
import CommonButton from './commonButton'
import AgencyCard from './agencyCard'

const Agency = () => {
  return (
    <AgencyBody>
      <AllPortionWrapper>
        <TitleContainer>
          <div>Fine rated</div>
          <Titlecontent>talent agency</Titlecontent>
        </TitleContainer>

        <AgencyContainer id="influencer-container">
          <AgencyCard />
        </AgencyContainer>
        <AgencyButtonHolder>
          <CommonButton
            image="/assets/agency/rightArrow-grey.svg"
            alt="arrow"
            text="Coming Soon"
            type="influencer"
            status="disabled"
            arrowVisible="true"
          />
        </AgencyButtonHolder>
      </AllPortionWrapper>
    </AgencyBody>
  )
}

export default Agency
