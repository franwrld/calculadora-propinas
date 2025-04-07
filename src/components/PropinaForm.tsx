import type { Dispatch, SetStateAction } from "react"
const tipOptions = [
    {
      id: 'tip-10',
      value: .10,
      label: '10%'
    },
    {
      id: 'tip-20',
      value: .20,
      label: '20%'
    },
    {
      id: 'tip-50',
      value: .50,
      label: '50%'
    },
  ]

type PropinaFormProps = {
    setTip: Dispatch<SetStateAction<number>>,
    tip: number
}
export default function PropinaForm({setTip, tip} : PropinaFormProps) {
  return (
    <div>
        <h3 className="font-black text-3xl">Propina:</h3>
        <form action="">
            {tipOptions.map(tipOp => (
                <div className="flex gap-2" key={tipOp.id}>
                    <label htmlFor={tipOp.id}>{tipOp.label}</label>
                    <input 
                        id={tipOp.id} 
                        type="radio" 
                        name="tip" 
                        value={tipOp.value}
                        onChange={ e => setTip(+e.target.value)}
                        checked={tipOp.value === tip}
                    />
                </div>
            ))}
        </form>
    </div>
  )
}
