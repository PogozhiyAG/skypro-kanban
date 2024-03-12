/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { PopupContext } from "../../../context/PopupContext";
import { CategoryLabel } from "../../CategoryLabel/CategoryLabel";
import { CalendarTitleP, FormArea, PopBlock, PopBtn, PopBtnGroup, PopCalendar, PopContainer, PopContent, PopDiv, PopForm, PopFormBlock, PopStatus, PopTitle, PopTopBlock, PopWrap, StatusThemes, SubTitleLabel, SubtitleTitleP } from "./PopBrowse.styled";
import { format } from "date-fns";
import ru from "date-fns/locale/ru";
import { DayPicker } from "react-day-picker";
import { StatusLabel } from "../../StatusLabel/StatusLabel";
import { TASK_STATUSES } from "../../../data";
import { DataContext } from "../../../context/DataContext";
import { StyledButton } from "../../styled/shared";


export const PopBrowse = ({item}) => {
	const [isEditMode, setIsEditMode] = useState(false);

	const [description, setDescription] = useState(item.description);
	const [date, setDate] = useState(item.date);
	const [status, setStatus] = useState(item.status);
	
	const {closePopup} = useContext(PopupContext);
	const {editTask, removeTask} = useContext(DataContext);

	const reset = () => {
		setDescription(item.description);
		setDate(item.date);
		setStatus(item.status);
	}

	const editMode = () => {
		setIsEditMode(true);		
	}

	const browseMode = () => {
		setIsEditMode(false);
		reset();
	}
	
	const saveTask = () => {
		const editedTask = {
			...item,
            status: status,
            description: description,
            date: date
		};

		editTask(editedTask)
		.then(closePopup)
		.catch(error => alert(error.message));
	}

	const deleteTask = () => {
		removeTask(item._id)
		.then(closePopup)
		.catch(error => alert(error.message));
	}

	const handleCloseClick = () => {		
		closePopup();
	}

	let footer = date 
		? <p>Срок исполнения <b>{format(date, 'P', {locale: ru})}</b></p>
		: <p>Выберите срок исполнения</p>;


    return (
        <PopDiv>
			<PopContainer>
				<PopBlock>
					<PopContent>
						<PopTopBlock>
							<PopTitle>{item.title}</PopTitle>
							<CategoryLabel code={item.topic} $size="L"/>
						</PopTopBlock>
						<PopStatus>
							<SubtitleTitleP>Статус</SubtitleTitleP>
							<StatusThemes>
								{isEditMode
									?   Object.keys(TASK_STATUSES).map(code => 
											<StatusLabel key={code} code={code} $isActive={status == code} onClick={() => setStatus(code)}/>
										)								 
									: 	<StatusLabel code={status} $isActive={true}/>
								}								
							</StatusThemes>
						</PopStatus>
						<PopWrap>
							<PopForm>									
								<PopFormBlock>
									<SubTitleLabel htmlFor="textArea01">Описание задачи</SubTitleLabel>
									<FormArea value={description} onChange={e => setDescription(e.target.value)} className="form-browse__area" name="text" id="textArea01"  readOnly={!isEditMode} placeholder="Введите описание задачи..."></FormArea>
								</PopFormBlock>
							</PopForm>
							<PopCalendar>
								<CalendarTitleP>Даты</CalendarTitleP>
								<DayPicker 
									mode="single"
									selected={date}
									onSelect={setDate}
									footer={footer}
									disabled={!isEditMode}
								/>
							</PopCalendar>
						</PopWrap>
						
						<PopBtn>
							<PopBtnGroup>
								{!isEditMode && <StyledButton onClick={editMode} >Редактировать задачу</StyledButton>}
								{isEditMode && <StyledButton onClick={saveTask} $highlight>Сохранить</StyledButton>}
								{isEditMode && <StyledButton onClick={browseMode} >Отменить</StyledButton>}
								<StyledButton onClick={deleteTask} >Удалить задачу</StyledButton>
							</PopBtnGroup>
							<StyledButton onClick={handleCloseClick} $highlight>Закрыть</StyledButton>
						</PopBtn>						
												
					</PopContent>
				</PopBlock>
			</PopContainer>
		</PopDiv>
    );
}