import { FC } from 'react'
import { Input } from '../ui/input';
import { FormikBag, FormikProps, withFormik } from 'formik';
import { Dialog } from '@radix-ui/react-dialog';
import { ConnectedProps, connect } from 'react-redux';
import { formState } from '@/Redux/selectors/Calendar';
import { createEvent, isFormVisible } from '@/Redux/slices/Calendar';
import { DialogContent } from '../ui/dialog';
import { Button } from '../ui/button';
import { useToast } from "@/Components/ui/use-toast"

type P = FormikProps<I> & ReduxProps

const Form: FC<P> = ({ values, handleChange, isVisible, toggleForm , handleSubmit }) => {
    const { toast } = useToast();

    return <Dialog open={isVisible} onOpenChange={() => toggleForm()} >
        <DialogContent >
        <p className='pl-3'>Enter the Event</p>

            <form className=' space-y-3 p-3' onSubmit={handleSubmit}>
                <Input placeholder='Enter the event title' value={values.title} onChange={handleChange} name='title' />
                <Input placeholder='Enter the event description' value={values.description} onChange={handleChange} name='description' />
                <Button children="submit" onClick={()=>{
                    toast({
                        title: "Scheduled: Catch up",
                        description: "Friday, February 10, 2023 at 5:57 PM",
                      })
                }} />
            </form>
        </DialogContent>
    </Dialog>
}

const initialValues = {
    title: '',
    description: ''
}

type I = typeof initialValues

const formikHoc = withFormik({
    mapPropsToValues: () => initialValues,
    handleSubmit: (values , bag:FormikBag<P , I>) => {
        bag.props.createEvent(values)
        bag.props.toggleForm()
        bag.props.resetForm();
    },
})

const mapStateToProps = (state: any) => ({
    isVisible: formState(state)
})

const mapDispatchToProps = {
    toggleForm: isFormVisible,
    createEvent
}

const connector = connect(mapStateToProps, mapDispatchToProps)

type ReduxProps = ConnectedProps<typeof connector>
export default connector(formikHoc(Form)) as any;