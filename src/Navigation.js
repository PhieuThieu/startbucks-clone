import * as React from "react";
import {motion} from "framer-motion";
import MenuLink from "./MenuLink";
import FindAStore from "./FindAStore";
import {useSelector} from "react-redux";
import {selectUser} from "./features/userSlice";
import SignInButton from "./SignInButton";
import SignUpButton from "./SignUpButton";
import LogoutButton from "./LogoutButton";

const variants = {
  open: {
    transition: {staggerChildren: 0.07, delayChildren: 0.2}
  }, closed: {
    transition: {staggerChildren: 0.05, staggerDirection: -1}
  }
};

const variants2 = {
  open: {
    y: 0, opacity: 1, transition: {
      y: {stiffness: 1000, velocity: -100}
    }
  }, closed: {
    y: 50, opacity: 0, transition: {
      y: {stiffness: 1000}
    }
  }
};

export const Navigation = ({toggle}) => {
  const [showMenuCategories, setShowMenuCategories] = React.useState(false)
  const user = useSelector(selectUser)

  return (<>
    {showMenuCategories ? (
      <motion.ul variants={variants}>
        <MenuLink path='/' link='Menu' goBackIcon onClick={() => {
          setShowMenuCategories(false)
        }} width="60%"/>
        <MenuLink  link='All products' path='/menu' onClick={() => {
          setShowMenuCategories(false)
          toggle()
        }}/>
        <MenuLink link='Featured' path='/menu/featured' onClick={() => {
          setShowMenuCategories(false)
          toggle()
        }}/>
        <MenuLink path='/' link='Previous Orders' onClick={() => {
          setShowMenuCategories(false)
          toggle()
        }}/>
        <MenuLink path='/' link='Favorite' onClick={() => {
          setShowMenuCategories(false)
          toggle()
        }}/>
      </motion.ul>
    ) : (
      <motion.ul variants={variants}>
        <MenuLink path='/' link="Menu"
                  icon
                  onClick={() => setShowMenuCategories(true)}/>
        <MenuLink path='/' link="Rewards"/>
        <MenuLink path='/' link="Gift Cards"/>
        <motion.hr variants={variants2}/>
        <motion.div className='navigation__buttons' variants={variants2}>
          {!user ? (<>
            <SignInButton/>
            <SignUpButton/>
          </>) : (<>
            <LogoutButton/>
          </>)}
        </motion.div>
        <motion.div variants={variants2}>
          <FindAStore/>
        </motion.div>
      </motion.ul>
    )
    }
  </>)
};
