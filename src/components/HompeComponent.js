import React from "react";
import "../styles/Homecomp.css";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import HomeIcon from "@mui/icons-material/Home";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import SportsBaseballOutlinedIcon from "@mui/icons-material/SportsBaseballOutlined";
import SignalCellularAltOutlinedIcon from "@mui/icons-material/SignalCellularAltOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import ConnectedTvOutlinedIcon from "@mui/icons-material/ConnectedTvOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import { useNavigate } from "react-router-dom";

function HomeComponent() {
  const navigate = useNavigate();
const alerttodemo =()=>{
navigate("/Dead");
}
  return (
      <Sidebar className="SiderClass">
        <Menu className="sidebar">
          <div className="subbarpart1">
            <MenuItem icon={<HomeIcon />}>Home</MenuItem>
            <MenuItem>Popular</MenuItem>
          </div>
          <SubMenu label="TOPICS">
            <SubMenu icon={<SportsEsportsOutlinedIcon />} label="game">
              <MenuItem onClick={()=>alerttodemo()}>Valheim</MenuItem>
              <MenuItem onClick={()=>alerttodemo()}>Genshin Impact</MenuItem>
              <MenuItem onClick={()=>alerttodemo()}>Minecraft</MenuItem>
              <MenuItem onClick={()=>alerttodemo()}>Pokimane</MenuItem>
              <MenuItem onClick={()=>alerttodemo()}>Halo Infinite</MenuItem>
              <MenuItem onClick={()=>alerttodemo()}>Call Of Duty: Warzone</MenuItem>
              <MenuItem onClick={()=>alerttodemo()}>Path of Exile</MenuItem>
              <MenuItem onClick={()=>alerttodemo()}>Hollow Knight: SilkSong</MenuItem>
              <MenuItem onClick={()=>alerttodemo()}>Escape from Tarkov</MenuItem>
              <MenuItem onClick={()=>alerttodemo()}>Watch Dogs: Legion</MenuItem>
            </SubMenu>
            <SubMenu icon={<SportsBaseballOutlinedIcon />} label="Sports">
              <MenuItem onClick={()=>alerttodemo()}>NFL</MenuItem>
              <MenuItem onClick={()=>alerttodemo()}>NBA</MenuItem>
              <MenuItem onClick={()=>alerttodemo()}>Megan Anderson</MenuItem>
              <MenuItem onClick={()=>alerttodemo()}>Atlanta Hawks</MenuItem>
              <MenuItem onClick={()=>alerttodemo()}>Los Angeles Lakers</MenuItem>
              <MenuItem onClick={()=>alerttodemo()}>Boston Celties</MenuItem>
              <MenuItem onClick={()=>alerttodemo()}>Arsenal F.C.</MenuItem>
              <MenuItem onClick={()=>alerttodemo()}>Philadelphia 76ers</MenuItem>
              <MenuItem onClick={()=>alerttodemo()}>Premier League</MenuItem>
              <MenuItem onClick={()=>alerttodemo()}>UFC</MenuItem>
            </SubMenu>
            <SubMenu icon={<SignalCellularAltOutlinedIcon />} label="Business">
              <MenuItem onClick={()=>alerttodemo()}>GameStop</MenuItem>
              <MenuItem onClick={()=>alerttodemo()}>Moderna</MenuItem>
              <MenuItem onClick={()=>alerttodemo()}>Pfizer</MenuItem>
              <MenuItem onClick={()=>alerttodemo()}>Johnson & johnson</MenuItem>
              <MenuItem onClick={()=>alerttodemo()}>AstraZeneca</MenuItem>
              <MenuItem onClick={()=>alerttodemo()}>Walgreens</MenuItem>
              <MenuItem onClick={()=>alerttodemo()}>Best Buy</MenuItem>
              <MenuItem onClick={()=>alerttodemo()}>Novavax</MenuItem>
              <MenuItem onClick={()=>alerttodemo()}>SpaceX</MenuItem>
              <MenuItem onClick={()=>alerttodemo()}>Tesla</MenuItem>
            </SubMenu >
            <SubMenu icon={<WbSunnyOutlinedIcon />} label="Crypto">
              <MenuItem onClick={()=>alerttodemo()}>Cardano</MenuItem>
              <MenuItem onClick={()=>alerttodemo()}>Dogecoin</MenuItem>
              <MenuItem onClick={()=>alerttodemo()}>Algorand</MenuItem>
              <MenuItem onClick={()=>alerttodemo()}>Bitcoin</MenuItem>
              <MenuItem onClick={()=>alerttodemo()}>Litecoin</MenuItem>
              <MenuItem onClick={()=>alerttodemo()}>Basic Attention Token</MenuItem>
              <MenuItem onClick={()=>alerttodemo()}>BitcoinCash</MenuItem>
            </SubMenu>
            <SubMenu icon={<ConnectedTvOutlinedIcon />} label="Television">
              <MenuItem onClick={()=>alerttodemo()}>The Real HouseWives of Atlanta</MenuItem>
              <MenuItem onClick={()=>alerttodemo()}>The Bachelor</MenuItem>
              <MenuItem onClick={()=>alerttodemo()}>Sister Wives</MenuItem>
              <MenuItem onClick={()=>alerttodemo()}>90 Day Finance</MenuItem>
              <MenuItem onClick={()=>alerttodemo()}>Wife Swap</MenuItem>
              <MenuItem onClick={()=>alerttodemo()}>The Amazing Race Australia</MenuItem>
              <MenuItem onClick={()=>alerttodemo()}>Married at First Sight</MenuItem>
              <MenuItem onClick={()=>alerttodemo()}>The Real Housewives of dalllas</MenuItem>
              <MenuItem onClick={()=>alerttodemo()}>My 600-lb life</MenuItem>
              <MenuItem onClick={()=>alerttodemo()}>Last Week Tonight with john oliver</MenuItem>
            </SubMenu>
            <SubMenu icon={<StarBorderOutlinedIcon />} label="Celebrity">
              <MenuItem onClick={()=>alerttodemo()}>Kim kardashian</MenuItem>
              <MenuItem onClick={()=>alerttodemo()}>Doja Cat</MenuItem>
              <MenuItem onClick={()=>alerttodemo()}>Lggy Azalea </MenuItem>
              <MenuItem onClick={()=>alerttodemo()}>Any Taylor-Joy</MenuItem>
              <MenuItem onClick={()=>alerttodemo()}>Natalie Portman</MenuItem>
              <MenuItem onClick={()=>alerttodemo()}>Henry Cavil</MenuItem>
              <MenuItem onClick={()=>alerttodemo()}>Millie Bobby Brown</MenuItem>
              <MenuItem onClick={()=>alerttodemo()}>Tom Hiddelston</MenuItem>
              <MenuItem onClick={()=>alerttodemo()}>Keanu Reeves</MenuItem>
            </SubMenu>
            <SubMenu label="Show more">
              <MenuItem onClick={()=>alerttodemo()}>Animal & Pets</MenuItem>
              <MenuItem onClick={()=>alerttodemo()}>Anime</MenuItem>
              <MenuItem onClick={()=>alerttodemo()}>Art</MenuItem>
              <MenuItem onClick={()=>alerttodemo()}>Cars And Motor Vehicles</MenuItem>
              <MenuItem onClick={()=>alerttodemo()}>Crafts & DIY</MenuItem>
              <MenuItem onClick={()=>alerttodemo()}>Culture,Race,And Ethnicity</MenuItem>
              <MenuItem onClick={()=>alerttodemo()}>Ethics & Philosphy</MenuItem>
              <MenuItem onClick={()=>alerttodemo()}>Fashion</MenuItem>
              <MenuItem onClick={()=>alerttodemo()}>Food and Drink</MenuItem>
              <MenuItem onClick={()=>alerttodemo()}>History</MenuItem>
              <MenuItem onClick={()=>alerttodemo()}>Hobbies</MenuItem>
              <MenuItem onClick={()=>alerttodemo()}>Law</MenuItem>
              <MenuItem onClick={()=>alerttodemo()}>Learning and Education</MenuItem>
              <MenuItem onClick={()=>alerttodemo()}>Militry</MenuItem>
              <MenuItem onClick={()=>alerttodemo()}>Movies</MenuItem>
              <MenuItem onClick={()=>alerttodemo()}>Music</MenuItem>
              <MenuItem onClick={()=>alerttodemo()}>Place</MenuItem>
              <MenuItem onClick={()=>alerttodemo()}>poadcat and Streamer</MenuItem>
              <MenuItem onClick={()=>alerttodemo()}>Politics</MenuItem>
              <MenuItem onClick={()=>alerttodemo()}>Programming</MenuItem>
              <MenuItem onClick={()=>alerttodemo()}>Reading Writting and literature</MenuItem>
              <MenuItem onClick={()=>alerttodemo()}>Religions and Sprituality</MenuItem>
              <MenuItem onClick={()=>alerttodemo()}>Science</MenuItem>
              <MenuItem onClick={()=>alerttodemo()}>TableTops Games</MenuItem>
              <MenuItem onClick={()=>alerttodemo()}>Technology</MenuItem>
              <MenuItem onClick={()=>alerttodemo()}>Travel</MenuItem>
            </SubMenu>
          </SubMenu>
          <div className="Resources">
            <SubMenu label="Resources">
             <MenuItem onClick={()=>alerttodemo()}>About reddit</MenuItem>
             <MenuItem onClick={()=>alerttodemo()}>Adverties</MenuItem>
             <MenuItem onClick={()=>alerttodemo()}>Help</MenuItem>
             <MenuItem onClick={()=>alerttodemo()}>Blog</MenuItem>
             <MenuItem onClick={()=>alerttodemo()}>Careers</MenuItem>
             <MenuItem onClick={()=>alerttodemo()}>Press</MenuItem>
             <SubMenu className="" label="see more">
              <div className="Resources">
              <MenuItem onClick={()=>alerttodemo()}>Community</MenuItem>
              <MenuItem onClick={()=>alerttodemo()}>Best of reddit</MenuItem>
              <MenuItem onClick={()=>alerttodemo()}>Topics</MenuItem>

              </div>
              <div className="Resources">
              <MenuItem onClick={()=>alerttodemo()}>Content Policy</MenuItem>
              <MenuItem onClick={()=>alerttodemo()}>Privacy Policy</MenuItem>
              <MenuItem onClick={()=>alerttodemo()}>User agreement</MenuItem>

              </div>
             </SubMenu>
            </SubMenu>
            <SubMenu label="POPULAR POST">
            <MenuItem onClick={()=>alerttodemo()}>English / Gloable</MenuItem>
            <MenuItem onClick={()=>alerttodemo()}>Deutsch</MenuItem>
            <MenuItem onClick={()=>alerttodemo()}>Espanol</MenuItem>
            <MenuItem onClick={()=>alerttodemo()}>Francais</MenuItem>
            <MenuItem onClick={()=>alerttodemo()}>Italiano</MenuItem>
            <MenuItem onClick={()=>alerttodemo()}>Portugues</MenuItem>

            </SubMenu>
            
          </div>

        </Menu>
      </Sidebar>
  );
}

export default HomeComponent;
