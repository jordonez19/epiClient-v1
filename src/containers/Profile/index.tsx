import React from 'react'
import BreadCrumb from '../../components/Global/BreadCrumb'
import TitleComponent from '../../components/Global/TitleComponent'

const ProfileContainer = () => {
  return (
    <>
          {/* Breadcrumb */}
          <BreadCrumb
              items={['inicio', 'profile']}
              baseURL={['dashboard', 'dashboard/profile/']}
          />

          {/* Component Title */}
          <TitleComponent
              title={'Perfil'}
          />

    </>
  )
}

export default ProfileContainer
