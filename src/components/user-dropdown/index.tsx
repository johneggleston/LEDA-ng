import Image from 'next/image';
import Anchor from '@ui/anchor';

const UserDropdown = () => (
  <div className="icon-box">
    <Anchor path="/author">
      <Image
        src="/images/icons/boy-avater.png"
        alt="Images"
        layout="fixed"
        width={38}
        height={38}
      />
    </Anchor>
    <div className="rn-dropdown">
      <div className="rn-inner-top">
        <h4 className="title">
          <Anchor path="/author">Jhon Doe</Anchor>
        </h4>
      </div>
      <div className="add-fund-button mt--20 pb--20">
        <Anchor className="btn btn-primary-alta w-100" path="/connect">
          Add Your More Funds
        </Anchor>
      </div>
      <ul className="list-inner">
        <li>
          <Anchor path="/author">My Profile</Anchor>
        </li>
        <li>
          <Anchor path="/edit-profile">Edit Profile</Anchor>
        </li>
        <li>
          <Anchor path="/connect">Manage funds</Anchor>
        </li>
      </ul>
    </div>
  </div>
);

export default UserDropdown;
