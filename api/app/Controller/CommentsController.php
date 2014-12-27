<?php
App::uses('AppController', 'Controller');
/**
 * Comments Controller
 *
 * @property Comment $Comment
 * @property ApiComponent $Api
 */
class CommentsController extends AppController {

/**
 * Components
 *
 * @var array
 */
	public $components = array('Api');

	public function index() {
		$comments = $this->Comment->find('all');

		if (!empty($comments)) {
			$this->Api->success($comments);
		} else {
			$this->Api->error(__('Not found Comments.'));
		}
	}

	public function save() {
		if ($this->Comment->save($this->request->data)) {
			$this->Api->success($this->Comment->find('first', array('conditions' => array('id' => $this->Comment->getLastInsertID()))));
		} else {
			$this->Api->validationError('Comment', $this->Comment->validationErrors);
		}
	}

	public function deleteId($id = null) {
		if (!empty($id) && $this->Comment->delete($id)) {
			$this->Api->success();
		} else {
			$this->Api->error(__('Not Deleted.'));
		}
	}
}
