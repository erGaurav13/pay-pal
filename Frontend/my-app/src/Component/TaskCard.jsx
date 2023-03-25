import '../CSS/TaskCard.css'

export const TaskCard=()=>{
    return <div className='Box'>
                 <div><ul>
                         <h3>Assign To : Gaurav Kumar</h3>
                         <p>Title : Find bug</p>
                         <details>  </details>
                         <h4>Status Completed</h4>
                         
                      </ul>
                     </div>


             <div className='btn'>
                 <button>UpdateAssigne</button>
                 <button>Status</button>
                 <button>Delete</button>

                </div>        
          </div>
}