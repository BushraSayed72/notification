import React from 'react'
import mark from '../images/avatar-mark-webber.webp';
import red  from '../images/circle-16.ico';
import angela from '../images/avatar-angela-gray.webp';
import jacob from  '../images/avatar-jacob-thompson.webp';
import rizky from '../images/avatar-rizky-hasanuddin.webp';
import kimberly from '../images/avatar-kimberly-smith.webp';
import chess from '../images/image-chess.webp';
import nathan from '../images/avatar-nathan-peterson.webp';
import anna from '../images/avatar-anna-kim.webp';



function notify() {
  return (
      <div className='container'>
    <div className='main-div'>
    <div className='navbar'>
        <div className='left'>
            <h2>Notifications</h2>
            
        </div>

        <div className='flex'>
        <div className='border'>
        <h3 className='numbr'>3</h3>  
        </div>

        <p className='right'>Mark all as read</p>
        </div>
        </div>

        <div className='mark'>
            <img className='img-mark' src={mark} alt="mark-webber"/>
            <div className='mark-notify'> <strong>Mark Webber</strong> reacted to your recent post <strong className='grey-text'>My first tournament today!</strong> <img className='red' src={red} alt="red-spot"/><br/>
            1m ago</div>
        </div>
        <div className='mark'>
            <img className='img-mark' src={angela} alt="angela-gray"/>
            <div className='mark-notify'> <strong>Angela gray</strong> followed you  <img className='red' src={red} alt="red-spot"/><br/>
            5m ago</div>
        </div>
        <div className='mark'>
            <img className='img-mark' src={jacob} alt=""/>
            <div className='mark-notify'> <strong>Jacob Thompson</strong> has joined your group <strong className='blue-text'>Chess Club</strong> <img className='red' src={red} alt="red-spot"/><br/>
            1 day ago</div>
        </div>
        <div className='rizky'>
            <img className='img-mark' src={rizky} alt="Rizky"/>
            <div className='mark-notify'> <strong>Risky Hasanuddin</strong> sent you a private message <br/>
            5 days ago</div>
        </div>
        <div className='msg-div'>
          <div className='msg'> Hello, thanks for setting up the Chess Club. I've been a member for a <br/>
          few weeks now and I'm already having lots of fun and improving my <br/>game.
          </div>

        </div>

        <div className='kimberly'>
      
            <img className='img-kim' src={kimberly} alt="kimberly"/>
            <div className='smith-notify'> 
            <div className='smith'>
            <strong >Kimberly Smith</strong> Commented on your picture<br/>
            1 week ago</div>
             <img className='ht-wt' src={chess} alt="chess"/>
             </div>
       
       </div>

       <div className='rizky'>
            <img className='img-mark' src={nathan} alt="Nathan"/>
            <div className='mark-notify'> <strong>Nathan Peterson</strong> reacted to Your recent post <strong className='grey-text'> 5 end-game strategies to <br/> increase your win rate </strong> <br/>
            2 weeks ago</div>
        </div>
        <div className='rizky'>
            <img className='img-mark' src={anna} alt=""/>
            <div className='mark-notify'> <strong>Anna Kim </strong> left the group <strong className='blue-text'>Chess Club</strong><br/>
            2 weeks ago</div>
        </div>

    </div>
    </div>
  )
}

export default notify
