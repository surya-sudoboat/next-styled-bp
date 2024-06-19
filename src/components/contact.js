/* eslint-disable no-unused-expressions */
import React, { useEffect, useState } from 'react'
import {
  ContactContainer,
  ContactTitlecontent,
  ContactDescription,
  HoverChange,
  ContactTitleAndDescription,
  ContactPortionWrapper,
} from './contact.module'
import { CategoryContent } from './creatorCategories.module'
import ScannerModal from './scannerModal'
import CommonButton from './commonButton'

const Contact = () => {
  const [openModal, setOpenModal] = useState(false)
  const [hoverEffect, setHoverEffect] = useState(false)

  return (
    <CategoryContent>
      {openModal && <ScannerModal setOpenScannerModal={setOpenModal} />}
      <ContactPortionWrapper>
        <ContactTitleAndDescription>
          <ContactContainer>
            <div>Get Verified Influencers Contact</div>
            <ContactTitlecontent>at your fingertips</ContactTitlecontent>
          </ContactContainer>
          <ContactDescription>
            Search, call or whatsapp top influencers in your category. Start you
            influencer{' '}
            <div>
              marketing with hashfame <span>for Free</span>
            </div>
          </ContactDescription>
        </ContactTitleAndDescription>
        <div
          onMouseOver={() => setHoverEffect(true)}
          onMouseLeave={() => setHoverEffect(false)}
          style={{ pointerEvents: 'auto' }}
        >
          <CommonButton
            image=""
            alt="arrow"
            text="Get HashFame Now"
            type="hashFame"
            status="enabled"
            arrowVisible="false"
            setOpenScannerModal={setOpenModal}
          />
        </div>
      </ContactPortionWrapper>
    </CategoryContent>
  )
}

export default Contact
