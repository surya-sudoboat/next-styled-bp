import React from 'react'
import { Titlecontent } from './creatorCategories.module'

import { AllPortionWrapper } from './agency.module'

import {
  TopicBody,
  TopicChipContainer,
  TopicChip,
  TitleContainer,
  TopicChipHolder,
} from './topics.module'

const Topics = () => {
  const AgencyDataRow = [
    {
      title: 'Top 10 influencers from TamilNadu',
      logo: '/assets/topics/location.svg',
    },
    {
      title: 'Top 10 influencers from Sports',
      logo: '/assets/topics/sports.svg',
    },
    {
      title: 'Top 20 influencers from Bangalore',
      logo: '/assets/topics/location.svg',
    },
    {
      title: 'Top 25 Hindi influencers',
      logo: '/assets/topics/language.svg',
    },
    {
      title: 'Top 25 influencers from Gaming',
      logo: '/assets/topics/sports.svg',
    },
    {
      title: 'Top 10 influencers from Delhi',
      logo: '/assets/topics/location.svg',
    },
    {
      title: 'Top 25 Tamil influencers',
      logo: '/assets/topics/language.svg',
    },
    {
      title: 'Top 25 Kannada influencers',
      logo: '/assets/topics/language.svg',
    },
    {
      title: 'Top 25 influencers from Gaming',
      logo: '/assets/topics/sports.svg',
    },
    {
      title: 'Top 10 influencers from Delhi',
      logo: '/assets/topics/location.svg',
    },
    {
      title: 'Top 25 Tamil influencers',
      logo: '/assets/topics/language.svg',
    },
    {
      title: 'Top 25 Kannada influencers',
      logo: '/assets/topics/language.svg',
    },
  ]

  return (
    <TopicBody>
      <AllPortionWrapper>
        <TitleContainer>
          <div>Top influencers</div>
          <Titlecontent>topics</Titlecontent>
        </TitleContainer>
        <TopicChipContainer>
          {AgencyDataRow.map((data, index) => (
            <TopicChip key={index}>
              <TopicChipHolder>
                <span>{data?.title}</span>
                <div style={{ position: 'relative' }}>
                  <img
                    className="iconanimate"
                    src={data?.logo}
                    alt="icon"
                    height="100%"
                    width="auto"
                  />
                  <img
                    className="arrowanimate"
                    src="/assets/agency/rightArrow-grey.svg"
                    alt="icon"
                    height="100%"
                    width="auto"
                  />
                </div>
              </TopicChipHolder>
            </TopicChip>
          ))}
        </TopicChipContainer>
      </AllPortionWrapper>
    </TopicBody>
  )
}

export default Topics
