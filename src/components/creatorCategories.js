/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/display-name */
import React, { forwardRef, useEffect } from 'react'
import {
  BodyContainer,
  CategoryContainer,
  CategoryContent,
  BodyContent,
  ContainerComponent,
  ComponentName,
  CategoryButton,
  CreatorButtonWrapper,
  Wrapper,
  CategoryName,
  ArrowImage,
  ContainerChipContainer,
  TitleContainer,
  Titlecontent,
} from './creatorCategories.module'
import Influencers from './influencers'
import Agency from './agency'
import Topics from './topics'
import Contact from './contact'
import Footer from './footer'
import { categories } from './constants'
import CommonButton from './commonButton'

const CreatorCategories = forwardRef((display, ref) => {
  return (
    <CategoryContainer display={display?.display}>
      <Wrapper display={display?.display}>
        <CategoryContent display={display?.display}>
          <TitleContainer display={display?.display} tabIndex={1} ref={ref}>
            <div>Top</div>
            <Titlecontent>creators categories</Titlecontent>
          </TitleContainer>
          <BodyContainer>
            <BodyContent display={display?.display}>
              {categories?.map((value, columnIndex) => (
                <ContainerComponent key={columnIndex}>
                  <ContainerChipContainer>
                    <CategoryName>
                      <div>
                        <img
                          src={value.icon}
                          alt={value.categoryName}
                          width="100%"
                          height="100%"
                        />
                      </div>

                      <ComponentName>{value.categoryName}</ComponentName>
                    </CategoryName>
                    <ArrowImage className="arrow">
                      <img
                        src="/assets/aboutContentImages/arrow.svg"
                        alt="arrow"
                        width="100%"
                        height="100%"
                      />
                    </ArrowImage>
                  </ContainerChipContainer>
                </ContainerComponent>
              ))}
            </BodyContent>
            <CreatorButtonWrapper display={display?.display}>
              <CommonButton
                image="/assets/aboutContentImages/arrow.svg"
                alt="arrow"
                text="Explore all categories"
                type="influencer"
                status="enabled"
                arrowVisible="true"
              />
            </CreatorButtonWrapper>
          </BodyContainer>
        </CategoryContent>

        <Influencers />
        <Topics />
        <Agency />
        <Contact />
      </Wrapper>
      <Footer />
    </CategoryContainer>
  )
})

export default CreatorCategories
