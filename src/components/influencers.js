import React from 'react'
import { Titlecontent } from './creatorCategories.module'

import { AllPortionWrapper } from './agency.module'

import {
  InfluencerBody,
  InfluencersContainer,
  InfluencerButtonHolder,
  TitleContainer,
} from './influencers.module'
import CommonButton from './commonButton'
import InfluencersCard from './influencersCard'

const Influencers = () => {
  return (
    <InfluencerBody>
      <AllPortionWrapper>
        <TitleContainer>
          <div>Trending</div>
          <Titlecontent>influencers</Titlecontent>
        </TitleContainer>
        <InfluencersContainer id="influencer-container">
          <InfluencersCard />
        </InfluencersContainer>
        <InfluencerButtonHolder>
          <CommonButton
            image="/assets/aboutContentImages/arrow.svg"
            alt="arrow"
            text="Explore All Influencers"
            type="influencer"
            status="enabled"
            arrowVisible="true"
          />
        </InfluencerButtonHolder>
      </AllPortionWrapper>
    </InfluencerBody>
  )
}

export default Influencers
