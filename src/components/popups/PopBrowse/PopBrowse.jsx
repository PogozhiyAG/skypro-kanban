/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { PopupContext } from "../../../context/PopupContext";
import { CategoryLabel } from "../../CategoryLabel/CategoryLabel";
import { CalendarTitleP, FormArea, PopBlock, PopCalendar, PopContainer, PopContent, PopDiv, PopForm, PopFormBlock, PopStatus, PopTitle, PopTopBlock, PopWrap, StatusThemes, SubTitleLabel, SubtitleTitleP } from "./PopBrowse.styled";
import { format } from "date-fns";
import ru from "date-fns/locale/ru";
import { DayPicker } from "react-day-picker";
import { StatusLabel } from "../../StatusLabel/StatusLabel";
import { TASK_STATUSES } from "../../../data";


export const PopBrowse = ({item}) => {
	const [isEditMode, setIsEditMode] = useState(false);

	const [description, setDescription] = useState(item.description);
	const [date, setDate] = useState(item.date);
	const [status, setStatus] = useState(item.status);
	
	const {closePopup} = useContext(PopupContext);

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
						
						<div className="pop-browse__btn-browse ">
							<div className="btn-group">
								{!isEditMode && <button onClick={editMode} className="btn-browse__edit _btn-bor _hover03">Редактировать задачу</button>}
								{isEditMode && <button className="btn-edit__edit _btn-bg _hover01">Сохранить</button>}
								{isEditMode && <button onClick={browseMode} className="btn-edit__edit _btn-bor _hover03">Отменить</button>}
								<button className="btn-browse__delete _btn-bor _hover03">Удалить задачу</button>
							</div>
							<button className="btn-browse__close _btn-bg _hover01" onClick={handleCloseClick}>Закрыть</button>
						</div>						
												
					</PopContent>
				</PopBlock>
			</PopContainer>
		</PopDiv>
    );
}